# 🎨 Get Your Colors!

## **Overview**
This project is a **React-based web application** that takes any text input, analyzes its sentiment, and generates color palettes accordingly. The palettes are dynamically generated using the **Gemini API**, ensuring that the colors match the emotion detected in the text.

## **✨ Features**
- Accepts **any text of any length** and analyzes its emotion.
- Generates **4 different palettes** for the detected sentiment.
- Users can click **"Generate" multiple times** to receive **new palettes** for the same text.
- Fully dynamic—**no predefined palettes**, ensuring unique results for each query.
- Simple and **minimalistic UI**, displaying color palettes in real-time.
- **Click on a color** to **copy its hex code** to the clipboard for easy use.

## **🛠️ Technologies Used**
- **React.js** for the front-end
- **Gemini API** for sentiment analysis & color palette generation
- **CSS** for styling
- **Fetch API** for API requests

---

## **📌 How It Works**
1. The user enters **any text** into the input field.
2. The app sends the text to the **Gemini API**, which determines its sentiment.
3. Based on the sentiment (e.g., **happy, sad, energetic, calm**), the API returns **4 unique palettes**.
4. The app **extracts the palettes** and displays them as colored boxes.
5. Clicking **"Generate" again** fetches new palettes for the same text, providing variety.
6. Users can **click on a color** to **copy its hex code** to the clipboard.

---

## **📂 Project Structure**
```
📦 palette-generator
├── 📄 src
│   ├── 📄 App.js          # Main React component
│   ├── 📄 PaletteGenerator.js  # Handles API calls & UI rendering
│   ├── 📄 styles.css      # Styling for the app
│   ├── 📄 index.js        # Renders the React app
├── 📄 package.json        # Dependencies & scripts
├── 📄 README.md           # Project documentation
```

---

## **🚀 Setup & Installation**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/amnaarriyas/ColorPalattesTHH3
cd palette-generator
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm start
```
The app will be available at **http://localhost:3000/**.

---

## **🔧 How to Use**
1. **Enter any text** (e.g., "Today is a great day!") in the input field.
2. Click the **"Generate Palette"** button.
3. **Wait a few seconds** while the API processes the sentiment.
4. View **4 unique color palettes** based on the detected sentiment.
5. Click **"Generate Palette" again** to see **new variations** for the same text.
6. **Click on a color box** to copy its hex code to the clipboard.

---

## **⚙️ API Integration**
- The app uses the **Gemini API** to determine the emotion and return color palettes.
- The response format looks like this:
```json
{
  "palettes": [
    { "name": "Calm", "colors": ["#F5F8F8", "#C5D9F1", "#89CFF0"] },
    { "name": "Energetic", "colors": ["#FF5733", "#FFC300", "#DAF7A6"] },
    { "name": "Dark", "colors": ["#2F4F4F", "#696969", "#000000"] },
    { "name": "Soft", "colors": ["#FFE4E1", "#FFC0CB", "#CD5C5C"] }
  ]
}
```

---

## **🎨 Example Output**
| Palette Name | Colors |
|-------------|--------|
| Calm | ![#F5F8F8](https://via.placeholder.com/20/F5F8F8?text=+) ![#C5D9F1](https://via.placeholder.com/20/C5D9F1?text=+) ![#89CFF0](https://via.placeholder.com/20/89CFF0?text=+) |
| Energetic | ![#FF5733](https://via.placeholder.com/20/FF5733?text=+) ![#FFC300](https://via.placeholder.com/20/FFC300?text=+) ![#DAF7A6](https://via.placeholder.com/20/DAF7A6?text=+) |

---

## **🛠️ Customization**
- Modify the **UI** in `styles.css`.
- Change **palette display logic** in `PaletteGenerator.js`.
- Improve **error handling** for API failures.
- Enhance the **copy-to-clipboard feature** for better user experience.

---

## **📜 License**
This project is open-source under the **MIT License**. Feel free to modify and share it!

---

## **📧 Contact**
For any questions or contributions, reach out at **your.email@example.com** or visit [GitHub](https://github.com/your-username).

