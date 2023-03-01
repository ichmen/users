import React from 'react';

export default function Posts({ posts }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="posts-table__head">Title</th>
          <th className="posts-table__head">Body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(({ id, title, body }) => (
          <tr key={id}>
            <th>{title}</th>
            <th>{body}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
