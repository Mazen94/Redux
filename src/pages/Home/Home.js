import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/actions';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { articles, loading } = this.props;
    return (
      <div class="container mt-5">
        <div class="row">
          {loading ? (
            <div class="offset-md-6 ">
              <Spinner />
            </div>
          ) : (
            articles.map(article => (
              <div class="col-md-4">
                <Card article={article} />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.gallery.articles,
    loading: state.gallery.loading
  };
}

export default connect(mapStateToProps, { fetchData })(Home);
