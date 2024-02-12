const styles = {
  nav: {
    gridArea: "n",
    backgroundColor: "burlywood",
    padding: '20px',
    height: '600px',
  },
  item: {
    "& a": {
      color: "white",
      textDecoration: "none",
    },
    "& a.active": {
      color: "green",
    },
  },
};

export default styles;
