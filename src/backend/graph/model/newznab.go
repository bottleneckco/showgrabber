package model

import "github.com/mrobinsn/go-newznab/newznab"

type Newznab struct {
	newznab.NZB
}

type NewznabComment = newznab.Comment
