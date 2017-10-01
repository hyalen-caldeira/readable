import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

const title = (
    <h1>Categories</h1>
);

class Category extends Component {
    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        const { categories, fetchPostsByCategoryId } = this.props
        
        return (
            <div>
                <Panel header={title}> 
                {    
                    Object.keys(categories).map((key, index) => (
                        <div key={key}>
                            <Link 
                                to={`/${categories[key].path}`}
                                onClick={() => fetchPostsByCategoryId(categories[key].path)}>
                                {categories[key].name}
                            </Link>
                        </div>
                    ))
                }
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

// function mapStateToProps ({category}) {
//     console.log('Olha eu aqui, oh ...', category)
//     return {
//       category: [{name:category.name, url:category.url}]
//     }
//   }

// export default connect(mapStateToProps)(Category);

function mapStateToProps (state) {
    return {
      categories: state.categories
    }
}

export default connect(mapStateToProps, actions)(Category);
// export default Category;