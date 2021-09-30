import propTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <h2>the page component</h2>
      {cool}
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: propTypes.string,
  children: propTypes.any,
};
