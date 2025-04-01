# Statement of Work: Budgetly Signup Functionality

## Functionality Requirements

- Users can register using email and password
- Securely hash passwords
- Validate email format and password strength
- Prevent duplicate registrations

## UI/UX Requirements (Based on Mockup)

### Layout

- Centered card layout with vertical stacking
- Minimal, mobile-optimized spacing
- Rounded white card with soft drop shadow

### Branding

- Budgetly logo (💲 icon inside green circle)
- Bold heading: "Create your Budgetly account"
- Subtext: "Start managing your finances with ease"

### Form Fields

- Email address
  - Placeholder: <you@example.com>
  - Email format validation
- Password
  - Password visibility toggle (eye icon)
  - Min. 8 characters validation
- Confirm password
  - Visibility toggle
  - Must match password field

### Buttons

- Create account → (primary CTA)
  - Full-width green button with hover/focus states
  - Disabled with spinner while submitting
- Sign in (secondary button)
  - Clear, bordered button below form

### UX Considerations

- Inline validation error messages
- Disable submit button until form is valid
- Link to login page for existing users

## Implementation Plan

### Database Schema (Mongoose)

- [x] Define User schema
  - [x] email: unique, indexed
  - [x] passwordHash: securely hashed password
  - [x] createdAt, updatedAt timestamps

### Backend API Endpoint (Express)

- [x] Create signup endpoint (`POST /auth/signup`)
  - [x] Validate request data (email, password)
  - [x] Check for existing email registrations
  - [x] Hash password securely with bcrypt
  - [x] Save new user to the database
  - [x] Return appropriate response (confirmation or JWT token)
  - [x] Implement global error handling

### Frontend Signup Form (React)

- [x] Develop signup form component
  - [x] Fields: Email, Password, Confirm Password
  - [x] React Hook Form integration
  - [x] Frontend validation schema using Zod
    - [x] Email format validation
    - [x] Password minimum length validation (8 characters)
    - [x] Password confirmation matching

### Frontend-Backend Integration (TanStack Query)

- [x] Create TanStack Query mutation for signup
  - [x] Handle success and error states clearly
  - [x] Display user-friendly validation and error messages

### Testing and Validation

- [ ] Test successful registration scenario
- [ ] Test duplicate email registration scenario
- [ ] Test invalid email format scenario
- [ ] Test weak password scenario
- [ ] Test password mismatch scenario

## Technical Standards

### Frontend

- React with TypeScript
- React Hook Form for form management
- Zod for validation schemas
- TanStack Query for API integration
- Tailwind CSS for styling
- Vitest for testing

### Backend

- Express with TypeScript
- Mongoose for database operations
- bcrypt for password hashing
- Jest for testing

## Dependencies

- MongoDB instance
- Development environment (from initial setup)
- Required npm packages:
  - @hookform/resolvers
  - zod
  - bcrypt
  - @tanstack/react-query

## Success Criteria

1. User can successfully register with valid email and password
2. Invalid inputs are properly validated and error messages displayed
3. Duplicate email registrations are prevented
4. Passwords are securely hashed before storage
5. All test scenarios pass
6. UI matches the provided mockup specifications
7. Form submission states (loading, success, error) are properly handled

## Progress Tracking

Current Status (March 30, 2024):

- ✅ Database Schema: Completed
  - User model created with email, passwordHash, and timestamps
  - Email validation and indexing implemented
  - Password hashing middleware configured
  - Password comparison method added
- ✅ Backend API Endpoint: Completed
  - Created POST /api/auth/signup endpoint
  - Implemented Zod validation for request data
  - Added duplicate email check
  - Configured password hashing with bcrypt
  - Set up JWT token generation
  - Added comprehensive error handling
- ✅ Frontend Form: Completed
  - Created SignupForm component matching mockup
  - Integrated React Hook Form with Zod validation
  - Added password visibility toggles
  - Implemented loading and error states
  - Added TanStack Query mutation
  - Styled with Tailwind CSS

Next Steps:

- Testing and Validation
  - Test successful registration
  - Test validation errors
  - Test duplicate email handling
  - Test password requirements

## Timeline Estimate

- Database Schema: 1 day
- Backend API: 2 days
- Frontend Form: 2 days
- Integration: 1 day
- Testing: 1 day

Total estimated timeline: 7 days

## Next Phase

Login Functionality Implementation
