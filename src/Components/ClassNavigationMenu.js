import React from "react";
import ClassNavigationButton from './ClassNavigationButton'

class ClassNavigationMenu extends React.Component {



    render() {
      return (
        <footer>
            <ClassNavigationButton name='Button clicked' clickHandler={() => console.log('clicked')} />
            <ClassNavigationButton name='Button clicked' />
            <ClassNavigationButton name='Button clicked' />
        </footer>
      );
    }
  }

  export default ClassNavigationMenu