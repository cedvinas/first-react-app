import React from "react";
import ClassNavigationButton from './ClassNavigationButton'

class ClassNavigationMenu extends React.Component {
    render() {
      return (
        <footer>
            <ClassNavigationButton />
            <ClassNavigationButton />
            <ClassNavigationButton />
        </footer>
      );
    }
  }

  export default ClassNavigationMenu