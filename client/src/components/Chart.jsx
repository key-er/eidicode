  import React from 'react';
  import ChartJS from 'chart.js'

  // class Chart extends React.Component {

  // }
  class Chart extends React.Component {
    constructor(props) {
        super(props);
        const ctx = document.getElementById('myChart').getContext('2d');
        // let {type, data, options} = this.props;

        this.chart = new ChartJS(ctx, {
          type: this.props.data.type,
          data: this.props.data.data,
          options: this.props.data.options
        })
      }

        // this.state = {
        //   data: this.props
        // }

        // const ctx = this.refs['chart'].getContext('2d')


    // componentDidMount() {
    //   // getting context for charts
    //   const ctx = this.refs['chart'].getContext('2d')
    //   let {type, data, options} = this.props;

    //   this.chart = new ChartJS(ctx, {
    //     type: type,
    //     data: data,
    //     options: options
    //   })
    // }

    // render(){
    //   return (
    //     <div style {{width:900, height:200, backgroundColor:'blue'}}>
    //       {/* <canvas ref='chart'></canvas> */}
    //     </div>;
    //     )
    // }

    render() {
      console.log('p is...', this.props)
      return (<div> <h3> Bar Chart </h3> </div>)
    }
  }



  export default Chart;