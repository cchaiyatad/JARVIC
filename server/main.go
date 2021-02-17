package main

import (
	"github.com/gin-gonic/gin"

	"counterproject/controllers/counterController"
)

func main() {
	r := gin.Default()

	r.POST("/counter", counterController.PostCounter)
	r.GET("/counter", counterController.GetCounters)
	r.GET("/counter/:id", counterController.GetCounter)
	r.PUT("/counter/:id", counterController.PutCounter)
	r.DELETE("/counter/:id", counterController.DeleteCounter)

	r.Run()
}
