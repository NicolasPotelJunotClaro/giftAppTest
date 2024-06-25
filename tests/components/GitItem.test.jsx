import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GitItem", () => {
  const title = "One punch";
  const url =
    "https://static.wikia.nocookie.net/onepunchman/images/8/85/Saitama_render.png/revision/latest/scale-to-width-down/248?cb=20191029171106&path-prefix=es";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug()
    // expect(screen.getByRole("img").src).toBe(url)
    // expect(screen.getByRole("img").alt).toBe(title)
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
