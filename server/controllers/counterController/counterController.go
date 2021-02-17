package counterController

import (
	"counterproject/models/counter"
	"counterproject/utills/database"
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Counter = counter.Counter

func GetCounters(c *gin.Context) {
	db := database.GetDB()
	var counters []Counter

	db.Find(&counters)
	c.JSON(http.StatusOK, gin.H{"Success": counters})
}

func GetCounter(c *gin.Context) {
	db := database.GetDB()
	id := c.Params.ByName("id")
	var counter Counter

	err := db.First(&counter, id).Error

	//if not found
	if errors.Is(err, gorm.ErrRecordNotFound) {
		c.JSON(http.StatusNotFound, gin.H{"Error": "Not Found"})
	} else {
		c.JSON(http.StatusOK, gin.H{"success": counter})
	}

}

func PostCounter(c *gin.Context) {
	db := database.GetDB()

	var counter Counter
	c.Bind(&counter)

	if err := db.Create(&counter).Error; err != nil {
		c.JSON(http.StatusUnprocessableEntity, gin.H{"Error": "Cannot add new counter"})
	} else {
		c.JSON(http.StatusCreated, gin.H{"Success": counter})
	}

}

func PutCounter(c *gin.Context) {
	db := database.GetDB()
	id := c.Params.ByName("id")

	var counter Counter
	err := db.First(&counter, id).Error

	//Not found
	if errors.Is(err, gorm.ErrRecordNotFound) {
		c.JSON(http.StatusNotFound, gin.H{"Error": "Not Found"})
		return
	}

	var newCounter Counter
	c.Bind(&newCounter)

	result := Counter{
		ID:    counter.ID,
		Value: newCounter.Value,
	}

	db.Save(&result)
	c.JSON(http.StatusAccepted, gin.H{"Success": result})
}

func DeleteCounter(c *gin.Context) {
	db := database.GetDB()
	id := c.Params.ByName("id")

	var counter Counter
	err := db.First(&counter, id).Error

	//Not found
	if errors.Is(err, gorm.ErrRecordNotFound) {
		c.JSON(http.StatusNotFound, gin.H{"Error": "Not Found"})
		return
	}

	db.Delete(&counter)
	c.JSON(http.StatusAccepted, gin.H{"Success": "Counter#" + id + " deleted"})
}
