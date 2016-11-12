library(plotly)

x <- c(1:100)
random_y <- rnorm(100, mean = 0)
data <- data.frame(x, random_y)

p <- plot_ly(data, x = ~x, y = ~random_y, type = 'scatter', mode = 'lines')

# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = plotly_POST(p, filename="line/basic")
chart_link

