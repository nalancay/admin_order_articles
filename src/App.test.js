import { render, screen } from "@testing-library/react";
import App from "./App";
import { IntlProvider } from "react-intl";
import messageEN from "./lang/en-US.json";
import { generateArticles } from "test/factories/articles";

const MOCK_ARTICLES = generateArticles();

describe("App Test", () => {
  const TestComponent = () => (
    <IntlProvider locale="en-US" messages={messageEN}>
      <App />
    </IntlProvider>
  );

  beforeAll(() => jest.spyOn(window, "fetch"));

  test("should show the links to manage 'Articles' and 'Orders'", () => {
    render(<TestComponent />);
    const linkArticles = screen.getAllByText(/Articles/i)[0];
    const linkOrders = screen.getAllByText(/Orders/i)[0];
    expect(linkArticles).toBeInTheDocument();
    expect(linkOrders).toBeInTheDocument();
  });

  test("should show the translation options in Spanish and English", () => {
    render(<TestComponent />);
    const optionSpanish = screen.getByText(/ESP/i);
    const optionEnglish = screen.getAllByText(/ING/i)[0];
    expect(optionSpanish).toBeInTheDocument();
    expect(optionEnglish).toBeInTheDocument();
  });

  test("should makes a GET request to fetch articles list and returns the result", async () => {
    window.fetch.mockResolvedValue({
      ok: true,
      json: async () => MOCK_ARTICLES,
      status: 200,
    });

    render(<TestComponent />);

    expect(fetch).toHaveBeenCalledWith("http://localhost:8000/orders", {
      body: undefined,
      headers: {},
      method: "GET",
    });

    for (let article of MOCK_ARTICLES) {
      expect(await screen.findByText(article.name)).toBeInTheDocument();
    }
  });

  test("should show an error message when has a network error", async () => {
    window.fetch.mockResolvedValueOnce(new Error("Error: "));
    render(<TestComponent />);
    expect(await screen.findByText(/Error: /i)).toBeInTheDocument();
  });
});
