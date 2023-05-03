import { fireEvent, render, screen } from "@testing-library/react";

import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar dois comentários corretamente", () => {
    render(<PostComment />);

    const commentTextarea = screen.getByTestId("comment-textarea");
    const commentButton = screen.getByTestId("comment-button");

    fireEvent.change(commentTextarea, {
      target: { value: "Primeiro comentario" },
    });
    fireEvent.click(commentButton);

    fireEvent.change(commentTextarea, {
      target: { value: "Segundo comentário" },
    });
    fireEvent.click(commentButton);

    const commentElements = screen.getAllByTestId('comment');
    expect(commentElements).toHaveLength(2);
  });
});
