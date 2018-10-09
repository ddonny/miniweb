import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'components/ListItem/index.scss';
import {
  Table,
  Pagination
} from 'react-materialize';
import Loader from 'components/Loader';
import { setPostData} from 'actions/globalActions';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      requestComplete: (props.requestComplete) ? props.requestComplete : false,
      activePage: 1,
      chunkPerPage: 10,
      availablePage: 1,
      groupsPostData: (props.groupsPostData) ? props.groupsPostData : [],
      groupsPostDataByPage: (props.groupsPostDataByPage) ? props.groupsPostDataByPage : []
    }
  }
  componentDidMount() {
    const {
      requestComplete
    } = this.state;
    if (!requestComplete) {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.processPostData(result);
        },
        (error) => {
          this.setState({
            error: error
          });
        }
      )
    }
  }
  wait(ms, data) {
    return new Promise(resolve => setTimeout(resolve.bind(this, data), ms));
  }
  async processPostData(postData) {
    const a = {
        act1: await this.wait(200, this.props.setPostData(postData)),
        act2: await this.wait(200,
            this.setData(postData)
        ),
        act3: await this.wait(200,
          this.setState({
            requestComplete: true
          })
        ),
        act4: await this.wait(200,
          this.getDataByCurrentPage()
        )
    };
    return a
  }
  splitArray = (array, chunk_size) => {
    var results = [];
    while (array.length) {
        results.push(array.splice(0, chunk_size));
    }  
    return results;
  }
  setData = (postData) => {
    const {
      activePage,
      chunkPerPage,
      availablePage
    } = this.state;
    let groups = this.splitArray(postData, chunkPerPage)
    this.setState({
      groupsPostData: groups,
      availablePage: groups.length
    });
  }
  getDataByCurrentPage = (page) => {
    const {
      activePage,
      chunkPerPage,
      availablePage,
      groupsPostData
    } = this.state;
    let currentPage;
    if (!page) {
      currentPage = activePage-1; 
    } else {
      currentPage = page-1;
    }
    this.setState({
      groupsPostDataByPage: groupsPostData[currentPage]
    })
  }
  onSelectPagination = (e) => {
    this.getDataByCurrentPage(e);
  }
  render() {
    const {
      requestComplete,
      error,
      activePage,
      chunkPerPage,
      availablePage,
      groupsPostDataByPage
    } = this.state;
    const {
      postData
    } = this.props.globalReducer;
    return (
      <div className="list-item">
        <h4>
          List of Items with pagination
        </h4>
          {
            (error) ?
            <div className="section-wrapper align-center">
              {
                JSON.stringify(error)
              }
            </div>
            :
            (!requestComplete || !postData || !groupsPostDataByPage) ?
            <div className="section-wrapper align-center">
              <Loader />
            </div>
            :
            <div className="section-wrapper">
              <Table>
                <thead>
                  <tr>
                    <th data-field="id">ID</th>
                    <th data-field="userId">User ID</th>
                    <th data-field="title">Title</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    (groupsPostDataByPage).map((item, index) => 
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td className="ellipsis">{item.body}</td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
              <Pagination items={chunkPerPage} activePage={activePage} maxButtons={availablePage} onSelect={this.onSelectPagination}/>
            </div>
          }
        </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setPostData: (payload) => dispatch(setPostData(payload))
})

ListItem.propTypes = {
  globalReducer: PropTypes.any,
  dispatch: PropTypes.any,
  setPostData: PropTypes.any,
  requestComplete: PropTypes.bool,
  groupsPostData: PropTypes.array,
  groupsPostDataByPage: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
