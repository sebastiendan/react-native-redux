import { connect } from 'react-redux'

import Header from '../components/Header'
import IStoreState from '../types'

function mapStateToProps({ user }: IStoreState) {
  return {
    user,
  }
}

export default connect(
  mapStateToProps,
  undefined
)(Header)
