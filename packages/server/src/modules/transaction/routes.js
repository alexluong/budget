import express from "express"
import axios from "axios"
import twilio from "twilio"
import throwError from "../../error"
import reminders from "./reminders"

const router = express.Router()

const TSYS_URL = process.env.TSYS_URL
const TSYS_API_KEY = process.env.TSYS_API_KEY

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER

const axiosIns = axios.create({
  baseURL: TSYS_URL,
  headers: {
    Authorization: `Bearer ${TSYS_API_KEY}`,
  },
})

const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

// GET /transactions
router.get("/transactions/:cardNumber", (req, res) => {
  const { cardNumber } = req.params

  const transactionPromise = axiosIns.get(
    `/transaction/card-${"4000000000000467"}/cycle?from=2016-10&to=2016-10`,
  )
  const accountPromise = axiosIns.get(`/account/card-${"4000000000000567"}`)

  axios
    .all([transactionPromise, accountPromise])
    .then(
      axios.spread((transactionRes, accountRes) => {
        res
          .status(200)
          .send({ transaction: transactionRes.data, account: accountRes.data })
      }),
    )
    .catch(error => {
      console.log(error)
      res.status(401).send({ message: "Error" })
    })
})

// GET /details/:cardNumber
router.get("/details/:cardNumber", (req, res) => {
  const { cardNumber } = req.params

  const generalPromise = axiosIns.get(`/customer/card-${"4000000000000217"}`)
  const infoPromise = axiosIns.get(
    `/customer/card-${"4000000000000208"}/${"000030435"}/information`,
  )

  axios
    .all([generalPromise, infoPromise])
    .then(
      axios.spread((generalRes, infoRes) => {
        res
          .status(200)
          .send({ ...generalRes.data.customerList[4], ...infoRes.data })
      }),
    )
    .catch(error => {
      console.log(error)
      res.status(401).send({ message: "Error" })
    })
})

// GET /reminders
router.get("/reminders", (req, res) => {
  res.status(200).send({ reminders })
})

// POST /trigger
router.post("/trigger", (req, res) => {
  let { reminders, phone, name } = req.body

  reminders.forEach(reminder => {
    twilioClient.messages
      .create({
        body: `Hey ${name}! Just a friendly reminder that your budget for ${
          reminder.name
        } this ${reminder.time} is $${reminder.amount}, and you have spent $${
          reminder.usage
        }. Have a great day!`,
        to: phone,
        from: TWILIO_PHONE_NUMBER,
      })
      .then(message => console.log(message.sid))
      .done()
  })

  res.sendStatus(200)
})

export default router
