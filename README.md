# Bites

> **Inspiration for your next meal**

---

## Problem & Solution

### User Problem:
> *“I want to cook something, but I do not know what. I would love a quick, visual way to discover new dishes.”*

### App Solution:
- Helps undecided users quickly find **meal inspiration**
- Minimal UI for fast **browsing and decision making**
- No sign up or login required, just open and explore
- Displays a list of meal categories for easy exploration
- Users can select a category to see a list of meals within it
- Tap on any meal to view its recipe with ingredients and steps
- Option to watch a YouTube video for step by step cooking guidance
  
---

## App Overview

**Bites** is a lightweight, cross platform mobile app that helps users quickly discover meal ideas when they are unsure what to cook. It is designed to deliver fast, image first recipe inspiration.

---

## App Flow

1. **Browse meals by category**  
   *(e.g: Beef, Dessert, Seafood)*

2. **View meals under the selected category**  
   - See a list of meal names with thumbnails

3. **Tap on a meal to view details**  
   - See ingredients, instructions, and other info  

---

## APIs Used

- [Categories List](https://www.themealdb.com/api/json/v1/1/categories.php)  
- [Meals in a Category](https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood)  
- [Meal Details by ID](https://www.themealdb.com/api/json/v1/1/lookup.php?i=52959)

---

## Tech Stack

- **React Native** (with [Expo](https://expo.dev))
- **React Navigation** – for screen navigation and stack management
- **React Query** – for API data fetching and caching
- **Expo Image** – optimized image loading with caching
- **TypeScript** – type safety and better developer experience

---

## Architecture

- Clean Architecture
- Separate folders and files for UI and data
- Clear separation of UI and business logic
- Reusable components

---

## Setup & Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/ckpdr/1060
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the app:

   ```bash
   npx expo start
   ```
4. Open in **Expo Go** or emulator

---

## Demo Video

You can watch the app here:
[[Watch the demo]](https://drive.google.com/file/d/1KRdhTl23RKBctoYcYbDPM4VJNPPReFnm/view?usp=sharing)

---

## Further Improvements

- Add state management using Redux or Zustand
- Allow users to mark a recipe as a favorite
- Allow users to search for a recipe
- Enable offline mode
- Allow users to pre-plan meals for each day of the week
- Explore possibilities of adding more images to a single meal

---
