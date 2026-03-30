# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2024-03-30 (HOTFIX)

### Fixed
- Enhanced health check endpoint with proper error handling
- Added uptime and memory metrics to health check
- Fixed potential crash in health endpoint

### Security
- Added input validation for user creation endpoint

## [1.1.0] - 2026-03-29

### Added
- User management endpoints (POST /users, GET /users)
- GitHub Actions CI/CD pipeline
- Pre-commit git hooks for validation
- Commit message format enforcement
- Security scanning in CI
- Comprehensive test suite

### Changed
- Updated project structure for production
- Enhanced documentation

### Security
- Added automated secret scanning
- Implemented branch protection rules

## [1.0.0] - 2024-03-25

### Added
- Initial project setup
- Basic health check endpoint
- Project documentation

