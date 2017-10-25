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
        // Since this list is static, you might consider making this call once in the App.js file.
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
                                to={`/${categories[key].path}`}>
                                {/* onClick={() => fetchPostsByCategoryId(categories[key].path)}> */}
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

function mapStateToProps (state) {
    return {
      categories: state.categories
    }
}

export default connect(mapStateToProps, actions)(Category);