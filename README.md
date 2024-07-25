# [Study Point](https://study-point-nine.vercel.app/)

## Overview

_Study Point_ is a full-stack e-learning platform designed to assist college students by providing a variety of study materials including notes, previous year question papers (PYQs), syllabus, tutorials, lab files, and more. The platform also features a discussion forum where users can ask questions and receive answers, enhancing collaborative learning.

## Features

- _Study Materials_: Access to notes, PYQs, syllabus, tutorials, lab files, and more.
- _Discussion Forum_: Post questions and provide answers to fellow students.
- _Search Functionality_: Quickly find the study materials you need.
- _User Profiles_: Update profile information easily.
- _Themes_: Choose from a variety of themes including Dark, Rose, Light, Violet, Green, Blue, etc.
- _Contact Us & Feedback_: Forms for user feedback and contact.

## Tech Stack

- _Frontend_: Next.js, TypeScript, Shadcn UI, Tailwind CSS
- _Backend_: PostgreSQL, Prisma, NextAuth (Google, Spotify, GitHub authentication)
- _Storage_: AWS S3
- _Package Manager_: Bun

## Installation

1. _Clone the repository_:
   bash
   git clone https://github.com/nikhilsahni7/STUDY-POINT.git
   cd study-point

2. _Install dependencies_:
   bash
   bun install

3. _Set up environment variables_:
   Create a .env file in the root directory and add your environment variables:
   env
   // Authentication Credentials

NEXTAUTH_URL=
NEXTAUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
AUTH_SPOTIFY_ID=
AUTH_SPOTIFY_SECRET=

// Aws credentials
AWS_ACCESS_KEY_ID=

AWS_SECRET_ACCESS_KEY=

AWS_S3_BUCKET_NAME=

AWS_REGION=

CLOUDFRONT_DOMAIN_NAME=

// Database credentials
DATABASE_URL=

4. _Run the development server_:
   bash
   bun dev

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- _Sign Up/In_: Use Google, Spotify, or GitHub to authenticate.
- _Browse Materials_: Navigate through the available study materials.
- _Participate in Forums_: Engage in discussions by posting questions or answering existing ones.
- _Customize Themes_: Personalize your experience by selecting a preferred theme.
- Share your thoughts: Give your feedback form and tell us about yourself by adding more details in profile and contact us for any query

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature-name.
3. Make your changes and commit: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature-name.
5. Create a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any queries or feedback, please reach out via [nikhil.sahni321@gmail.com](mailto:nikhil.sahni321@gmail.com).

---
