import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import api from "../../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/constants"

import { useState, useEffect } from 'react'

export default function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        
        try {
            const res = await api.post('/api/token/refresh/', { refresh: refreshToken })

            if (res.status === 200) {
                console.log(res.data)
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            } else {
                alert(res.data.detail)
                setIsAuthorized(false)
            }

        } catch (e) {
            setIsAuthorized(false)
        }
    }

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            setIsAuthorized(false)
            return
        }
        const decoded = jwtDecode(token)
        const currentTime = Date.now().valueOf() / 1000

        if (decoded.exp < currentTime) {
            await refreshToken()

        }
        else {
            setIsAuthorized(true)
        }
    }

    if (isAuthorized === null) {
        return <div className="text-white">Loading...</div>
    }
    return isAuthorized ? children : <Navigate to="/Login" />
}
