import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Dimensions = () => {
  const [dimensions, setDimentions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimentions({ width: innerWidth, height: innerHeight });
    const handleResize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimentions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { width, height } = dimensions;

  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

/*
class Dimentions extends React.Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    const { innerHeight, innerWidth } = window;
    this.setDimentions({ width: innerWidth, height: innerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimentions({ width: innerWidth, height: innerHeight });
  };

  setDimentions = ({ width, height }) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    const { width, height } = this.state;
    return <div className="dimensions">{`${width}px - ${height}px`}</div>;
  }
}
*/

export default Dimensions;
