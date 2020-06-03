package teststore

import (
	"database/sql"

	"github.com/Kentabr5427/http-rest-api/internal/app/model"
	"github.com/Kentabr5427/http-rest-api/internal/app/store"
)

//Store ...
type Store struct {
	userRepository    *UserRepository
	db                *sql.DB
	articleRepository *ArticlesRepository
}

//New ...
func New() *Store {
	return &Store{}
}

//User ...
func (s *Store) User() store.UserRepository {
	if s.userRepository != nil {
		return s.userRepository
	}

	s.userRepository = &UserRepository{
		store: s,
		users: make(map[int]*model.User),
	}

	return s.userRepository
}

//Article ...
func (s *Store) Article() store.ArticlesRepository {
	if s.articleRepository != nil {
		return s.articleRepository
	}

	s.articleRepository = &ArticlesRepository{
		store:    s,
		articles: make(map[int]*model.Article, 5),
	}

	return s.articleRepository
}
