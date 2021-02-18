package cors

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func CorsSetting() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Add("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Add("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
		c.Writer.Header().Add("Access-Control-Allow-Headers", "Content-Type, Option")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusOK)
			return
		}
		c.Next()
	}
}
