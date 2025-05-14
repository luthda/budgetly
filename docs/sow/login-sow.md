# Statement of Work: Login Functionality

## Functionality Requirements

- [x] User can log in with valid credentials (email/password)
- [x] Backend returns JWT token upon successful login
- [x] JWT token includes necessary user details (user ID, email)
- [x] User receives clear error feedback for incorrect credentials

## UI/UX Requirements

### Layout

- [x] Simple, intuitive layout consistent with Signup form
- [x] Centrally aligned email and password fields with clear labeling

### Branding

- [x] Follows established Budgetly brand guidelines (color scheme, typography)
- [x] Consistency with existing Signup feature in terms of visual design

### Components

- [x] LoginForm Component
  - [x] Email input (type=email)
  - [x] Password input (type=password)
  - [x] Submit button labeled "Login"
  - [x] Inline error message display
  - [x] Show password toggle button
  - [x] Auto-focus on email field on page load

### UX Considerations

- [x] Responsive design for mobile, tablet, and desktop
- [x] Immediate, clear feedback provided for incorrect login attempts
- [x] Loading state indicator during form submission
- [ ] Automatic redirection to /dashboard after successful login (pending dashboard implementation)

## Implementation Plan

### Backend API Endpoints

- [x] POST /api/auth/login
  - [x] Request validation using Zod
  - [x] Business logic for verifying user credentials
  - [x] Generate JWT token upon successful verification
  - [x] JSON response structure includes JWT token, user ID, and email
  - [x] Proper HTTP status and error responses (400, 401)
  - [x] Set JWT token in HTTP-only cookie with 24-hour expiration

### Frontend Components

- [x] LoginForm Component
  - [x] Props interface clearly defined
  - [x] State management with React Hook Form and Zod
  - [x] Event handlers for form submission and error handling
  - [x] API integration with TanStack Query
  - [x] Tailwind CSS styling for consistency
  - [ ] Global login state management (React Context/Zustand) (pending)

### Integration

- [x] Secure JWT storage in HTTP-only cookies
- [x] Integration with backend API
- [x] Robust frontend error handling
  - [x] Inline validation errors for form fields
  - [x] Toast notifications for network errors
  - [x] Clear error messages for authentication failures

### Testing and Validation

- [ ] Unit tests implemented using Vitest
- [ ] Integration tests using Vitest
- [ ] End-to-end (E2E) tests

## Technical Standards

### Frontend

- React with TypeScript
- React Hook Form
- Zod validation
- TanStack Query
- Tailwind CSS
- shadcn UI components
- Vitest for testing
- React Context or Zustand for global state

### Backend

- [x] Express with TypeScript
- [x] Mongoose for MongoDB
- [x] Jest for testing

## Dependencies

### External

- [x] jsonwebtoken
- [x] bcrypt

### Internal

- [x] User schema

### Development

- [x] Vitest
- [x] Jest

## Success Criteria

1. [x] Users successfully log in with valid credentials
2. [x] Clear error messages presented to users when login fails
3. [x] JWT tokens securely generated and functional
4. [ ] Automatic redirection to dashboard after successful login (pending dashboard)
5. [x] Proper error handling for all scenarios

## Progress Tracking

### Current Status (2025-05-14)

- [x] Backend
  - [x] Login endpoint
  - [x] JWT integration
- [x] Frontend
  - [x] Login form UI
  - [x] API integration
- [ ] Testing
  - [ ] Unit and integration testing
  - [ ] End-to-end testing

### Next Steps

1. [x] Start backend API implementation
2. [x] Develop frontend component
3. [ ] Implement testing suite

## Timeline Estimate

- [x] Backend implementation: 1-2 days
- [x] Frontend implementation: 1-2 days
- [ ] Testing phase: 1 day

Total estimated timeline: 4-5 days

## Implementation Clarifications

### JWT Storage

- [x] Use HTTP-only cookies for JWT storage (prevents XSS attacks)
- [x] Token expiration set to 24 hours
- [x] No token refresh required for MVP

### Error Handling

- [x] Specific error messages:
  - [x] Invalid credentials: "Invalid email or password"
  - [x] Network issues: "Unable to connect. Please try again later"
- [x] No rate limiting for MVP
- [x] Network errors shown via toast notifications
- [x] Authentication errors displayed inline with form fields

### Security

- [x] JWT in HTTP-only cookies provides sufficient security for MVP
- [x] No additional CSRF protection required
- [x] Standard Zod validation:
  - [x] Email format validation
  - [x] Password minimum length: 8 characters

### UX Details

- [x] No "Remember me" option (24-hour session sufficient)
- [x] Include "Show password" toggle
- [x] Auto-focus email field on page load

### Integration

- [ ] Global state management for login status (pending)
- [ ] Automatic redirection to /dashboard after login (pending dashboard)
- [x] No special handling for multiple tabs/windows
- [x] Each tab independently verifies authentication status

## Next Phase

Implementation of Forgot Password functionality and JWT middleware.
