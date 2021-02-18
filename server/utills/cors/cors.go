package cors

import "github.com/gin-gonic/gin"

func CorsSetting() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Add("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Next()
	}
}
