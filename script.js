/****************************************************
 * FUNCTION: findMatches(arr1, arr2)
 * --------------------------------------------------
 * Purpose:
 *   Compares two arrays and counts how many numbers
 *   appear in BOTH arrays.
 *
 * Parameters:
 *   arr1 (Array) - first sorted array of numbers
 *   arr2 (Array) - second sorted array of numbers
 *
 * Process:
 *   - Uses nested loops to compare each element
 *   - If a number in arr1 matches a number in arr2,
 *     the match counter increases
 *
 * Returns:
 *   Total number of matching values (INT)
 ****************************************************/
function findMatches(arr1, arr2) {
    let matchCount = 0; // Counter for matches

    // Outer loop goes through arr1
    for (let i = 0; i < arr1.length; i++) {

        // Inner loop goes through arr2
        for (let j = 0; j < arr2.length; j++) {

            // Check if numbers match
            if (arr1[i] === arr2[j]) {
                matchCount++;
                break; // Stop inner loop to avoid double counting
            }
        }
    }

    return matchCount;
}

/****************************************************
 * FUNCTION: calculatePrize(matches)
 * --------------------------------------------------
 * Purpose:
 *   Determines the prize message based on the
 *   number of matches.
 *
 * Parameters:
 *   matches (INT) - number of matching values
 *
 * Process:
 *   - Uses conditional statements (if / else)
 *   - Matches the count to a prize tier
 *
 * Returns:
 *   Prize message (String)
 ****************************************************/
function calculatePrize(matches) {

    if (matches === 6) {
        return "JACKPOT! You won ₱1,000,000!";
    } 
    else if (matches === 5) {
        return "Amazing! You won ₱100,000!";
    } 
    else if (matches === 4) {
        return "Great! You won ₱10,000!";
    } 
    else if (matches === 3) {
        return "Nice! You won ₱1,000!";
    } 
    else {
        return "Better luck next time!";
    }
}

/****************************************************
 * FUNCTION: displayResults(matches, prize)
 * --------------------------------------------------
 * Purpose:
 *   Displays the final game results on the screen.
 *
 * Parameters:
 *   matches (INT) - number of matching values
 *   prize (String) - prize message
 *
 * Process:
 *   - Updates the results section in the HTML
 *   - Displays match count and prize message
 *   - Uses conditionals to change display for
 *     winning vs losing results
 *
 * Returns:
 *   Nothing (updates HTML only)
 ****************************************************/
function displayResults(matches, prize) {

    const matchCount = document.getElementById("match-count");
    const prizeMessage = document.getElementById("prize-display");

    // Update the match count display
    matchCount.textContent = matches;

    // Update the prize message display
    prizeMessage.textContent = prize;

    // Conditional for styling based on matches
    if (matches >= 3) {
        prizeMessage.style.color = "green";
        prizeMessage.style.fontWeight = "bold";
    } else {
        prizeMessage.style.color = "red";
        prizeMessage.style.fontWeight = "normal";
    }
}

/****************************************************
 * FUNCTION: resetGame()
 * --------------------------------------------------
 * Purpose:
 *   Resets the game without refreshing the page.
 *
 * Process:
 *   - Clears all six input boxes using a loop
 *   - Clears displayed player numbers
 *   - Clears displayed lottery numbers
 *   - Clears match count and prize display
 *
 * Returns:
 *   Nothing (clears HTML only)
 ****************************************************/
function resetGame() {

    // =============================
    // Clear input boxes (using loop)
    // =============================
    
    // Not sure for what input yet so I commented this out for now
    /*for (let i = 1; i <= 6; i++) {
        document.getElementById("num" + i).value = "";
    }*/

    // =============================
    // Clear displayed values
    // =============================
    document.getElementById("player-numbers").textContent = "---";
    document.getElementById("lottery-numbers").textContent = "---";
    document.getElementById("match-count").textContent = "0";
    document.getElementById("prize-display").textContent = "---";

    // Reset prize display style
    document.getElementById("prize-display").style.color = "black";
    document.getElementById("prize-display").style.fontWeight = "normal";

    // Clear error message if any
    document.getElementById("error-message").textContent = "";
}

/*
    I am not sure if this will work as intended since we don't have 
    inputs yet to reset. Will fix once inputs are added.
*/

document.getElementById("play-again-btn").addEventListener("click", resetGame);