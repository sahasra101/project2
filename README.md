# Rentable

Powered by: 
-Zillow 
-Google Maps 

Rentable is an app built by 

Tommy Flynn, Tawny Francis, Ajay Kiri, Justin Lampe for Penn Bootcamp December 2019. 

1. Purpose

The app allows a user to:

A. Create a user login that can be saved on the app. 
B. Fill out a form with input fields for a specific property. 
C. View Zillow estimates and Google Map results for that property. 
D. View property calculations given the user input. 
E. Adjust any input fields and receive adjusted calculations. 
F. Save any property search. 
G. Access saved searches on a separate My Properties page. 
H. Delete any saved searches to clear up the page. 
I. Read FAQs to explain the real estate terms used in the app. 

2. How it Works 

A. Passport.js allows the user to create an email login and reaccess their account anytime they revisit the app. 
B. HTML input field submissions values are captured using JQuery. 
C. The address field submissions and submit button trigger API calls to both Zillow and Google Maps. The Zillow API provides a range of rental zestimates and the purchase price zestimate, providing the user context for their input values. The Google Maps API provides a pin at the address location. 
D. Backend equations apply to the input values to determine three variables: Initial Investment, Year One Return, and Year One Yield. 
E. Since the user input values don't automatically empty following the submit button click (by design), the user can change one aspect of their submission (for example, renovation costs) and get different outcomes. This allows the user to make adjustments with each variable while controlling for the rest of the fields, making it easy to see how small changes to the property costs affect the outcomes. The outcomes are presented in a small results table.
F. A save button triggers a jquery onclick, moving the contents of the results table to a separate My Properties page. 
G. The page uses passport.js and a MYSQL database (with a JAWSDB extension on heroku) to store the user's saved properties. 
H. A delete button triggers an onclick event removing the property from the database. 
I. We wanted anyone to be able to use the app, not only investors versed in real estate terminology. The FAQ page can be accessed using info icons that align with each term. Clicking any of the info icons will open a separate page and automatically align the user's view with the placement of the relevant term on the FAQ page. 

3. To use the APP: 

A. Login to the app using an email. If you don't have a login yet, use your email to create one. 

B. Fill out input form. Be sure to use a real address if you want the API calls to work properly. Otherwise you will receive an API error response. You can leave any of the fields blank and the app will still work, but you probably want to at least provide a purchase price and a projected rent (otherwise the app doesn't have any numbers to actually calculate). Be sure to click submit. If at any point you want to clear the input fields, use the clear button. 

C. After clicking submit, you will receive a results table at the bottom of the page. You can adjust any of the input fields and receive new results to compare yields (for example). 

D. Click save search to save the results table to your personalized my properties page. 

E. Delete any saved searches you no longer want to view by clicking the delete button. 

F. Read through the FAQ page (which can be accessed by clicking any of the info icons) if you want to understand how the calculations are being made. 

4. The App uses: 
- Passport.js 
- HTML/CSS
- javascript
- jquery
- Bootstrap (for the results tables only)
- mySQL 
- JawsDB 
- Heroku 
- Zillow API 
- Google Maps API 
- NPM PACKAGES:
    - Express 
    - Body-Parser  
    - session 
    - sequelize 
    - node-zillow