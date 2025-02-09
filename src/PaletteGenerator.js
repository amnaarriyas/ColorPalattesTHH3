import { useState } from "react";
import axios from "axios";
import "./styles.css";

const API_KEY = "AIzaSyCyel993KYY9C4kXxBAiG4cV423RgjHg04"; // Replace with your Gemini API key

const PaletteGenerator = () => {
  const [word, setWord] = useState("");
  const [palettes, setPalettes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePalette = async () => {
    if (!word.trim()) return;

    setLoading(true);
    setError("");
    setPalettes([]);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `Analyze the emotion of the word "${word}" and generate 4 different 5-color hex palettes that represent the emotion. Respond in JSON format like this and no other text: 
                    {"palettes": [
                      {"name": "Palette 1", "colors": ["#color1", "#color2", "#color3", "#color4", "#color5"]},
                      {"name": "Palette 2", "colors": ["#color1", "#color2", "#color3", "#color4", "#color5"]},
                      {"name": "Palette 3", "colors": ["#color1", "#color2", "#color3", "#color4", "#color5"]},
                      {"name": "Palette 4", "colors": ["#color1", "#color2", "#color3", "#color4", "#color5"]}
                    ]}`
                },
              ],
            },
          ],
        }
      );

      const resultText = response.data.candidates[0]?.content?.parts[0]?.text.trim();
      const jsonMatch = resultText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("Invalid JSON response");

      const resultJSON = JSON.parse(jsonMatch[0]);
      setPalettes(resultJSON.palettes || []);
    } catch (err) {
      setError("Error generating palettes. Try another word.");
      console.error("Error:", err);
    }

    setLoading(false);
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div>
      <div className="animated-background"></div>
      <div className="container">
        <h1>Get your Colors!</h1>
        <input
          type="text"
          placeholder="Enter your text to generate palettes"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="input"
        />
        <button onClick={generatePalette} disabled={loading} className="button">
          {loading ? "Generating..." : "Generate"}
        </button>

        {error && <p className="error">{error}</p>}

        <div className="palettes">
          {palettes.map((palette, index) => (
            <div key={index} className="palette">
              <h2 className="palette-name">{palette.name}</h2>
              <div className="colors">
                {palette.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="color-box"
                    style={{ backgroundColor: color }}
                    onClick={() => copyToClipboard(color)}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-space"></div>
    </div>
  );
};

export default PaletteGenerator;
