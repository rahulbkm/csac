# Copilot Service Admin Center (CSAC) UI

A recreated Dynamics 365-style user interface for the Copilot Service Admin Center, featuring a comprehensive layout with navigation, tabs, command bar, and data grid.

## Features

- **Top Navigation Bar**: Dynamics 365 branding with environment indicator (SANDBOX)
- **Sidebar Navigation**: Quick access to key sections (Overview, User management, AI Agents, etc.)
- **Tabbed Interface**: Multiple tabs (General, Timeout Rules, Automated Messages, Related)
- **Command Bar**: Action buttons (Save, Save & Close, New, Delete, Refresh, Check Access)
- **Data Grid**: Automated Messages table with checkboxes and mock data
- **Responsive Design**: Adapts to different screen sizes
- **Interactive Elements**: Checkbox selection, tab switching, and navigation

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Python 3 (for running the local server) or any other HTTP server

### Running the Application

1. Clone the repository:
```bash
git clone https://github.com/rahulbkm/csac.git
cd csac
```

2. Start a local HTTP server:
```bash
python3 -m http.server 8080
```

Or use Node.js:
```bash
npx http-server -p 8080
```

3. Open your browser and navigate to:
```
http://localhost:8080/index.html
```

## File Structure

```
csac/
├── index.html      # Main HTML structure
├── styles.css      # Dynamics 365-inspired styling
├── script.js       # Interactive functionality
└── README.md       # This file
```

## UI Components

### Top Navigation
- Dynamics 365 branding
- Copilot Service admin center label
- Environment badge (SANDBOX)
- Settings, Help, and Profile icons

### Sidebar Navigation
- Overview
- User management
- AI Agents
- Channels
- Workstreams
- Queues
- Session templates
- Application tabs
- Quick replies
- Context variables

### Main Content Area
- Page header with title
- Tab navigation
- Command bar with action buttons
- Data grid with automated messages

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Dynamics 365 design system principles

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is for demonstration purposes.