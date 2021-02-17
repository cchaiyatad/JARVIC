package database

import (
	"counterproject/models/counter"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Counter = counter.Counter

func GetDB() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("./data.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&Counter{})

	return db
}
