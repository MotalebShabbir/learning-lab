# Prayer Time CLI

A command-line app that fetches today's Islamic prayer times for any city in the world and highlights the next upcoming prayer.

## Features

- Fetches live prayer times via [Aladhan API](https://aladhan.com/prayer-times-api)
- Highlights the next prayer in the terminal
- Shows time remaining until next prayer
- Works for any country name and city name

## Installation

```bash
git clone https://github.com/motalebshabbir/CLI-prayer-time.git
cd CLI-prayer-time
```

No dependencies required — uses only Node.js built-ins.

## Usage

```bash
node prayer-time.js
```

Then follow the prompts:

```
Enter your country name: Bangladesh
Enter your city name: Dhaka
```

### Example output

```
=== Today prayer time =====
Fajr     : 4:52 AM
Dhuhr    : 12:06 PM
Asr      : 3:30 PM
Maghrib  : 6:18 PM
Isha     : 7:33 PM   ← highlighted in green (next prayer)
=== Next prayer ===========
Next prayer  : Isha
Time left    : 0 hours and 42 minutes
```

## How It Works

1. Asks for your country and city via terminal input
2. Calls the Aladhan API to get today's prayer times
3. Converts time strings to JavaScript `Date` objects
4. Compares each prayer time to the current time to find the next prayer
5. Displays all prayer times and highlights the next one
