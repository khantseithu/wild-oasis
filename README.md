<div align="center">

  <img src="public/logo-light.png" alt="logo" width="205" height="auto" />
    <h1>Wild Oasis Boutique Hotel</h1>
</div>

Wild Oasis Boutique Hotel Management is a comprehensive application designed to streamline the management of a small boutique hotel with 8 luxurious wooden cabins. This internal application offers an intuitive user interface and powerful features to efficiently handle bookings, cabin management, guest information, and more. Built with **React, React Router, Styled Components, Recharts, React Query, and Supabase**, Wild Oasis empowers hotel staff to deliver exceptional guest experiences.

## Features

- **Booking Management**: Effortlessly create, update, and cancel bookings for the hotel's cabins. Stay informed with comprehensive booking statistics and occupancy data beautifully presented using Recharts.
- **Cabin Management**: Easily track the availability, occupancy, and maintenance status of each cabin. Seamlessly perform actions like sorting, filtering, creating new cabins, and updating or deleting existing ones.
- **Guest Information**: Store and manage guest details, including names, contact information, and special requests, for personalized service and enhanced guest satisfaction.
- **User Authentication**: Securely authenticate hotel staff members and manage user accounts. Invitations can be sent by existing users to invite new team members to join the application.
- **Intuitive UI with Dark Mode**: Enjoy a clean and user-friendly interface that ensures effortless navigation and data entry. Personalize the visual experience by toggling between light and dark mode.
- **Real-time Updates**: Benefit from real-time data synchronization across multiple users and devices, ensuring that everyone stays up-to-date.

## Tech Stack

The project utilizes a powerful tech stack to deliver a seamless experience:

- **Frontend**:
  - React: A popular JavaScript library for building user interfaces.
  - React Router: A flexible routing library for React applications.
  - Styled Components: A CSS-in-JS library for styling React components.
  - Recharts: A charting library for React applications, offering beautiful and interactive charts.
  - React Query: A data-fetching library that provides a powerful and efficient way to manage data in React applications.
- **Backend and Authentication**:
  - Supabase: An open-source alternative to Firebase that provides a backend-as-a-service platform, including authentication and database functionalities.

## Installation

To run the Wild Oasis Boutique Hotel Management application locally, please follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/khantseithu/wild-oasis
   ```

2. Navigate to the project directory:

   ```
   cd wild-oasis
   ```

3. Install the dependencies using a package manager of your choice. For example, with npm:

   ```
   npm install
   ```

4. Start the application:

   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to access the Wild Oasis.

## Usage

Upon launching the application, you will be presented with a login screen. Enter your credentials to log in and access the hotel management features.

The main dashboard provides a comprehensive overview of the hotel's statistics, including bookings, cabins, sales, and occupancy data. The data is beautifully visualized using Recharts, giving you actionable insights at a glance.

In the Bookings section, you can view all bookings made by clients, along with their current status (unconfirmed, checked-in, checked-out). You have the ability to sort bookings based on their status and view their details. The modal allows you to confirm check-ins, delete bookings, and perform other relevant actions.

The Cabins section empowers you to manage all the cabins in the hotel. View cabin details, update their information, delete cabins, or create new ones as needed. Sorting and filtering options are available to efficiently navigate through the cabin inventory.

In the Users section, new users can only be signed up by existing users. This section allows you to manage user accounts, invite new team members, and oversee user access to the application. Note that new users will need to confirm their email addresses to successfully join.

The Settings section offers you the flexibility to adjust various hotel settings, such as the maximum number of nights allowed for bookings, maximum number of guests, and breakfast prices. Adapt these settings to match the unique requirements of your hotel.

Enjoy the intuitive and efficient workflow provided by the Wild Oasis Boutique Hotel Management application as you deliver exceptional experiences to your guests.
