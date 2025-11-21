const JWTVerify = () => {
    const { token } = req.cookies
    
    if (token) {
        jwt.verify(token, JWT_SECRET_KEY, {}, (error, userInfo) => {
            if (error) throw error

            res.json(userInfo)
        })
    } else {
        res.json(null)
    }
}

