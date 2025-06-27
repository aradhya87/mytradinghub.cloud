const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const KYC = require('../models/KYC')
const router = express.Router()

// Setup multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, '..', 'uploads', 'kyc')
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    cb(null, `${Date.now()}-${file.fieldname}${ext}`)
  }
})

const upload = multer({ storage: storage })

// Route: POST /upload-kyc
router.post('/upload-kyc', upload.fields([{ name: 'frontId' }, { name: 'backId' }]), async (req, res) => {
  const { email, idNumber } = req.body
  const frontFile = req.files['frontId']?.[0]
  const backFile = req.files['backId']?.[0]

  if (!email || !idNumber || !frontFile || !backFile) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    let existing = await KYC.findOne({ email })
    if (existing) {
      existing.idNumber = idNumber
      existing.frontIdPath = frontFile.path
      existing.backIdPath = backFile.path
      existing.status = 'pending'
      await existing.save()
    } else {
      await KYC.create({
        email,
        idNumber,
        frontIdPath: frontFile.path,
        backIdPath: backFile.path,
        status: 'pending'
      })
    }

    res.json({ message: 'KYC submitted successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Route: GET /kyc-status?email=...
router.get('/kyc-status', async (req, res) => {
  const { email } = req.query
  if (!email) return res.status(400).json({ error: 'Email required' })

  try {
    const kyc = await KYC.findOne({ email })
    if (!kyc) return res.json({ status: 'not_submitted' })
    res.json({ status: kyc.status })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
