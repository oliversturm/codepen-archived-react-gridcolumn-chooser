const {
  Grid,
  Table,
  TableHeaderRow,
  DragDropProvider,
  ColumnChooser,
  TableColumnVisibility,
  TableColumnReordering,
  Toolbar } =
DevExpress.DXReactGridBootstrap3;

class App extends React.PureComponent {
  render() {
    const { rows, columns } = this.state;

    return /*#__PURE__*/(
      React.createElement(Grid, { rows: rows, columns: columns, getRowId: this.getRowId }, /*#__PURE__*/
      React.createElement(DragDropProvider, null), /*#__PURE__*/
      React.createElement(Table, null), /*#__PURE__*/
      React.createElement(TableColumnReordering, { defaultOrder: ['name', 'artist', 'year'] }), /*#__PURE__*/
      React.createElement(TableHeaderRow, null), /*#__PURE__*/
      React.createElement(TableColumnVisibility, { defaultHiddenColumnNames: ['year'] }), /*#__PURE__*/
      React.createElement(Toolbar, null), /*#__PURE__*/
      React.createElement(ColumnChooser, null)));


  }

  getRowId(row) {
    return row.id;
  }

  constructor(props) {
    super(props);

    this.state = {
      columns: [
      { name: 'name', title: 'Name' },
      { name: 'artist', title: 'Artist' },
      { name: 'year', title: 'Year' }],

      rows: [
      {
        id: 1,
        name: 'Their Satanic Majesties Request',
        artist: 'The Rolling Stones',
        year: 1967 },

      { id: 2, name: 'Prime Cuts', artist: 'David Bowie', year: 1983 },
      { id: 3, name: 'Human', artist: "Rag'n'Bone Man", year: 2017 },
      { id: 4, name: "Kill 'Em All", artist: 'Metallica', year: 1983 },
      {
        id: 5,
        name: 'Colour by Numbers',
        artist: 'Culture Club',
        year: 1983 },

      {
        id: 6,
        name: 'Born in the U.S.A.',
        artist: 'Bruce Springsteen',
        year: 1984 },

      { id: 7, name: 'Disraeli Gears', artist: 'Cream', year: 1967 },
      {
        id: 8,
        name: 'Between the Buttons',
        artist: 'The Rolling Stones',
        year: 1967 },

      {
        id: 9,
        name: "Sgt. Pepper's Lonely Hearts Club Band",
        artist: 'The Beatles',
        year: 1967 },

      {
        id: 10,
        name: 'The Battle of Los Angeles',
        artist: 'Rage Against the Machine',
        year: 1999 },

      { id: 11, name: 'The Slim Shady LP', artist: 'Eminem', year: 1999 }] };


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));