package sqlstore

import (
	"database/sql"

	"github.com/Kentabr5427/http-rest-api/internal/app/store"
	_ "github.com/go-sql-driver/mysql" // ...
)

//Store ...
type Store struct {
	db                *sql.DB
	userRepository    *UserRepository
	articleRepository *ArticlesRepository
}

//New ...
func New(db *sql.DB) *Store {
	return &Store{
		db: db,
	}
}

//User ...
func (s *Store) User() store.UserRepository {
	if s.userRepository != nil {
		return s.userRepository
	}

	s.userRepository = &UserRepository{
		store: s,
	}

	return s.userRepository
}

//Article ...
func (s *Store) Article() store.ArticlesRepository {
	if s.articleRepository != nil {
		return s.articleRepository
	}

	s.articleRepository = &ArticlesRepository{
		store: s,
	}

	return s.articleRepository
}
