package main

import (
	"fmt"
	"json"
	"io/ioutil"
)

type Order struct {
	total_price int
	total_price_usd int
}

func main() {
	// Read the local file
	dat, err := ioutil.ReadFile('./orders.json')
	if err != nil {
		panic(err)
	}

	var orders interface{}

	err := json.Unmarshal(dat, &orders)
	if err != nil {
		panic(err)
	}

	for key, order := range orders {
		fmt.Println(order)
	}


}

func sum() {

}

func sum_from_fs() {

}

func sum_from_url() {

}

func test() {

}