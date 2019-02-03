import express from "express"
// Routes
// import authenticationRouter from "./modules/authentication/routes"
// import uploadRouter from "./modules/upload/routes"
import transactionRouter from "./modules/transaction/routes"

const router = express.Router()

// router.use("/", authenticationRouter)
// router.use("/", uploadRouter)
router.use("/", transactionRouter)

export default router
