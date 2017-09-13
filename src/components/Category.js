import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

const title = (
    <h4><strong>Categories</strong></h4>
);



class Category extends Component {
    render() {
        console.log('Props Category', this.props);

        const { category } = this.props;

        return (
            <div>
                <Panel header={title}>
                    Panel content
                </Panel>
            </div>
        )
    }
}

// const Category = () => {
//     console.log('Props Category', this.props)

//     return (
//         <div>
//             <Panel header={title}>
//                 Panel content
//             </Panel>
//         </div>
//     )
// }

function mapStateToProps ({category}) {
    console.log('Olha eu aqui, oh ...', category)
    return {
      category: [{name:category.name, url:category.url}]
    }
  }

export default connect(mapStateToProps)(Category);
