package main

import (
	"fmt"
	"time"
)

func main() {
	now := time.Now().Format(time.RFC1123)
	fmt.Println("Hello from Go! The time is:", now)
}
