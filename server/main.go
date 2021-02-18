package main

import (
	"github.com/gin-gonic/gin"

	"counterproject/controllers/counterController"
	"counterproject/utills/cors"
)

func main() {
	r := gin.Default()

	r.Use(cors.CorsSetting())

	r.POST("/counter", counterController.PostCounter)
	r.GET("/counter", counterController.GetCounters)
	r.GET("/counter/:id", counterController.GetCounter)
	r.PUT("/counter/:id", counterController.PutCounter)
	r.DELETE("/counter/:id", counterController.DeleteCounter)

	r.Run(":8080")
}
