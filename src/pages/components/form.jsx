import React from "react"

function Form() {

    return (
        <>
            <form>
                <label htmlFor="zip">Enter your ZIP code</label>
                    <input
                    type="text"
                    id="zip"
                    name="zip"
                    maxLength="9"
                    pattern="\d{1,9}"
                    required
                    placeholder="e.g. 49001"
                    />

                <label htmlFor="budget">Enter your budget</label>
            <select id="budget" name="budget" required>
                <option value="">-- Select Budget --</option>
                <option value="Free">Free</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
            </select>

                <label htmlFor="time">Enter Window of Time</label>
            <select id="time" name="time" required>
                <option value="">-- Select Time --</option>
                {Array.from({ length: 24 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                    {i + 1} hour{i + 1 > 1 ? "s" : ""}
                </option>
                ))}
            </select>

            <label id="activities" htmlFor="activity">What are you interested in for today?</label>
        <div className="interestBoxes">
            <label>
                <input type="checkbox" name="interests" value="Art" /> Art
            </label>
            <label>
                <input type="checkbox" name="interests" value="Music" /> Music
            </label>
            <label>
                <input type="checkbox" name="interests" value="Nature" /> Nature
            </label>
            <br />
            <label>
                <input type="checkbox" name="interests" value="Sports" /> Sports
            </label>
            <label>
                <input type="checkbox" name="interests" value="Coffee" /> Coffee
            </label>
            <label>
                <input type="checkbox" name="interests" value="Food" /> Food
            </label>
        </div>

            <button className="formSubmit" type="submit">Make Your Plan</button>
        </form>
        </>
    )
}

export default Form