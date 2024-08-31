import { createContext } from "react"
import {connect} from "socket.io-client"
import App from "../../App"


const socket = connect("ws://localhost:7000")
const socketContext = createContext()

export {socket, socketContext}
