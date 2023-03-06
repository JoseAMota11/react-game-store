export const Comment = ({ comments }) => {
  return (
    <section className='single-page__comment'>
      <h3>Comments</h3>
      {comments ? (
        comments?.map(({ id, user, comment }) => (
          <div key={id} className='comment__container'>
            <span className='user'>{user}</span>
            <p className='comment'>{comment}</p>
          </div>
        ))
      ) : (
        <span>No comments</span>
      )}
    </section>
  );
};
