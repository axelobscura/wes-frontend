import propTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
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
