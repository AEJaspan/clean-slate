export interface Article {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    thumbnail?: string;
    tags: string[];
}

/*
 * ============================================================================
 * HOW TO ADD A NEW BLOG POST
 * ============================================================================
 *
 * 1. Copy the template below and paste it at the TOP of the articles array
 * 2. Fill in your content using the format shown
 * 3. Commit and push - GitHub Actions will auto-deploy!
 *
 * TEMPLATE (copy everything between the dashes):
 * ----------------------------------------------------------------------------
  {
    id: "your-url-slug",           // URL-friendly (lowercase, hyphens)
    title: "Your Article Title",
    date: "Jan 2026",              // Format: "Mon YYYY"
    excerpt: "A brief description that appears in article listings.",
    content: `
# Your Article Title

Your introduction paragraph here.

## Section Heading

Your content with **bold** and *italic* text.

### Subsection

- Bullet point 1
- Bullet point 2

1. Numbered list
2. Second item

## Conclusion

Wrap up your thoughts here.
    `,
    thumbnail: "https://images.unsplash.com/photo-XXXXX?w=800&h=400&fit=crop",
    tags: ["Tag1", "Tag2", "Tag3"]
  },
 * ----------------------------------------------------------------------------
 *
 * TIPS:
 * - Find free images at unsplash.com, copy the photo URL and add ?w=800&h=400&fit=crop
 * - Use # for main title, ## for sections, ### for subsections
 * - Articles are sorted by their position in the array (first = newest)
 *
 * ============================================================================
 */

// Add new articles at the TOP of this array (newest first)
export const articles: Article[] = [
    {
        id: "llm-classifier-confidence-scores",
        title: "Evaluating Confidence Calibration in LLM-as-Judge Classification Systems",
        date: "Sep 2025",
        excerpt:
            "An empirical investigation into confidence consistency and calibration across multiple LLMs, confidence representation formats, and classification tasks.",
        content: `
# Evaluating Confidence Calibration in LLM-as-Judge Classification Systems

Large Language Models (LLMs) are increasingly deployed as classifiers in what's commonly referred to as "LLM-as-judge" frameworks. While these models aren't explicitly optimized for classification tasks, they have demonstrated remarkable reliability across diverse domains. However, unlike traditional probabilistic classifiers that output calibrated probability distributions, off-the-shelf LLMs typically provide only discrete predictions without accompanying confidence measures.

This limitation is significant because confidence scores enable crucial downstream applications—such as selective prediction, where low-confidence samples can be flagged for human review, or threshold optimization to achieve desired precision-recall trade-offs.

A popular solution to this limitation is to prompt LLM judges to provide confidence scores alongside their classifications. However, these confidence estimates represent subjective, non-deterministic assessments that differ fundamentally from the posterior probabilities of traditional probabilistic models.

This raises critical questions about the reliability and calibration of LLM confidence estimates: Do these subjective confidence scores correlate meaningfully with actual classification accuracy? How consistent are confidence estimates across different representation formats? And do different model architectures exhibit varying degrees of calibration quality?

## Results

### Calibration Quality Metrics

The Expected Calibration Error (ECE) provides a standardized metric for calibration quality, with perfect calibration yielding ECE = 0. Our comprehensive analysis reveals substantial mis-calibration across all configurations:

**Key observations from the metrics:**
- **Categorical format shows the worst calibration**: ECE values of 0.300 (GPT-4o) and 0.427 (GPT-4o-mini), with Maximum Calibration Error (MCE) reaching 0.8
- **Float format achieves best calibration**: ECE values of 0.128-0.135, though still representing significant mis-calibration by traditional standards
- **Integer format offers middle ground**: ECE values of 0.108-0.195, balancing expressiveness with consistency

### Perfect Classification Anomaly

An unexpected finding emerges from the SMS spam dataset where GPT-4o achieves 100% accuracy across all 120 samples:

- **Systematic underconfidence despite perfection**: Mean confidence varies by format (0.70-0.89) despite 100% accuracy
- **Format-dependent confidence ceiling**: Integer format (0.892) most closely approaches appropriate confidence for perfect performance
- **GPT-4o-mini's overconfident errors**: 66.7% of float-format errors occur at >80% confidence, indicating dangerous overconfidence

### Summary of Key Findings

1. **No format achieves acceptable calibration**: ECE values (0.108-0.427) far exceed well-calibrated model thresholds (ECE < 0.05)
2. **Perfect accuracy with imperfect calibration**: GPT-4o's 100% accuracy with 70-89% mean confidence demonstrates fundamental decoupling between classification and confidence mechanisms
3. **High-confidence errors persist**: GPT-4o-mini shows 66.7% of errors occur at >80% confidence in float format—a critical failure mode for deployment
4. **Format trade-offs are unavoidable**: Float offers best calibration (ECE = 0.128) but worst consistency (CV = 0.009), while categorical provides consistency (CV = 0.004) at severe calibration cost (ECE = 0.427)

## Conclusion

This study provides the first systematic evaluation of confidence calibration in LLM-as-judge classification systems across multiple representation formats. Our experiments reveal a fundamental challenge: while LLMs can achieve high classification accuracy (up to 100% on SMS spam detection), their confidence estimates remain severely miscalibrated across all tested formats.

The key finding is that confidence representation format significantly impacts both calibration quality and consistency, but no format achieves satisfactory performance. Perhaps most concerning, our analysis uncovered that models express high confidence (>80%) even when making errors.

These findings indicate that prompted confidence scores from LLMs, regardless of representation format, remain unsuitable for high-stakes applications requiring reliable uncertainty quantification.
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        tags: ["LLM", "Machine Learning", "Classification", "AI"],
    },
    {
        id: "negotiation-strategies",
        title: "Collaborative Agents: How AI Models Negotiate in a Multi-Turn Prisoner's Dilemma",
        date: "May 2025",
        excerpt:
            "Studying how effectively AI models can negotiate across OpenAI, Anthropic & Gemini models, measuring how provider and size affects collaboration.",
        content: `
# Collaborative Agents: How AI Models Negotiate in a Multi-Turn Prisoner's Dilemma

I looked at six pairings of agents—across OpenAI, Anthropic & Gemini models—and measured how model provider and size affects collaboration, and I explored giving models the option to make, and break contracts between each other, to see how this affects cooperative behavior.

## Experimental Setup

### Models Used

| Model | Provider | Size |
| -------------------- | --------- | ----- |
| GPT-4o | OpenAI | Large |
| GPT-4o-mini | OpenAI | Small |
| Claude 3.5 Sonnet V2 | Anthropic | Small |
| Gemini 1.5 Pro | Gemini | Large |
| Gemini 1.5 Flash | Gemini | Small |

### Pairings Tested

- GPT-4 vs Claude 3.5-v2
- GPT-4 vs GPT-4-mini
- Claude 3.5-v2 vs GPT-4-mini
- Gemini 1.5-pro vs Gemini 1.5-flash
- Gemini 1.5-pro vs GPT-4-mini
- Gemini 1.5-pro vs Claude 3.5-v2

## Cooperation Results

### Provider Differences

- Cooperation was significantly higher between models from the **same provider** compared to models from **different providers**
- **Same-provider average cooperation:** approximately **45%**
- **Different-provider average cooperation:** approximately **21%**

### Model Size Effects

- Pairings between **one large and one small model** showed considerably higher cooperation rates compared to pairings of **two large models**
- **Large-small pair average cooperation:** about **65%**
- **Large-large pair average cooperation:** about **22%**

### Effect of Contracts

- Allowing contracts led to a significant improvement in cooperation across all pairings
- **With contracts:** average cooperation rose to around **36%**
- **Without contracts:** average cooperation was lower, around **22%**

## Contract-Breaking Behavior

### Power Dynamics (Model Size)

- Smaller models consistently broke contracts more frequently when interacting with larger models
- **Small model breaking contracts with large:** about **87%** of the time
- **Large model breaking contracts with small:** about **22%** of the time

### Provider Trust Dynamics

- Surprisingly, contract breaking was more frequent between models from the **same provider** than those from **different providers**
- **Same-provider break rate:** approximately **60%**
- **Different-provider break rate:** approximately **45%**

## Discussion

- **Same-provider cooperation** is significantly higher, possibly due to underlying similarities in model training and behavioral tendencies
- **Mixed-size pairings** appear to balance incentives, possibly due to differing strategic perspectives or a perceived hierarchy
- **Contracts serve as effective commitment mechanisms**, enhancing overall cooperation
- The tendency of smaller models to frequently break contracts with larger models suggests an exploitation of asymmetric expectations

### Implications and Recommendations

- Deploying **mixed-size agent teams** with explicit contracts might yield optimal cooperation
- Careful consideration of provider ecosystems is crucial; diversity in provider selection could reduce competitive dynamics

## Conclusion

Cooperation significantly improves with provider alignment, mixed-size pairings, and contract availability. Contract making and breaking is nuanced, heavily influenced by model size and provider alignment. This study reveals essential insights into designing cooperative multi-agent systems with AI models.

**Code:** https://github.com/AEJaspan/negotiation_blog
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop",
        tags: ["AI", "Multi-Agent Systems", "Game Theory", "Research"],
    },
    {
        id: "genai-connect-langchain",
        title: "GenAI Connect: Building with LangChain",
        date: "Jul 2024",
        excerpt:
            "Delivering a technical introduction to building generative AI applications using LangChain at PwC UK's GenAI Connect event.",
        content: `
# Building with LangChain

Last week, PwC UK hosted the GenAI Connect day. This event brought together over 1,400 technologists from across the firm, with a focus on learning around Generative AI.

![GenAI Connect](/posts/gen-ai-connect.webp)

It was great to have the opportunity to deliver a session at this event, in which I gave a technical introduction to building generative AI applications using LangChain. It was a good opportunity to get into the pros and cons of LangChain, and to show technologists at PwC what is possible with this incredible new technology.
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
        tags: ["LangChain", "GenAI", "Python", "PwC"],
    },
    {
        id: "llm-as-a-judge",
        title: "LLM as a Judge to Validate the Accuracy of Generated Content",
        date: "Jun 2024",
        excerpt:
            "Implementing a novel technique using LLMs as judges to validate the accuracy of generated content through Retrieval-Augmented Generation (RAG).",
        content: `
# LLM as a Judge to Validate the Accuracy of Generated Content

Large Language Models (LLMs) like GPT-4 have found many use cases. A particular strength of these models is the abstractive summarization of long, complicated text. This application presents the user with a problem though - how can you be sure that the summary is correct? The simple solution is to read the entire document being summarised - but naturally, that defeats the purpose of generating this summary.

At PwC, I have implemented a novel technique that uses LLMs as judges to validate the accuracy of generated content through Retrieval-Augmented Generation (RAG).

## How RAG Validation Works

RAG combines the strengths of retrieval-based and generative models. When an LLM generates a summary, we can now use RAG to cross-reference the summary with relevant source documents. This process involves retrieving pertinent information from the source material and comparing it with the generated content to identify discrepancies and ensure factual accuracy.

## Benefits

This approach not only improves the quality of the content but also instills confidence in users, making them more likely to adopt and integrate AI into their business operations. By demonstrating the effectiveness of RAG in producing reliable and trustworthy content, we empower businesses to harness the full potential of AI, fostering innovation and efficiency.

## Conclusion

Employing LLMs as judges using RAG for content validation holds significant potential. It can streamline the review process, enhance content reliability, and combat misinformation. As AI technology advances, the role of LLMs in ensuring content accuracy through RAG will likely become even more critical.

I have attached a demonstration of the tool that I built, presented by one of my colleagues, Timothy Chapman. This shows the LLM-as-a-judge tool being presented in a front end application that I also put together via Streamlit.

For more details, see the blog post: https://www.linkedin.com/pulse/testing-genai-three-brief-case-studies-demonstrating-so-chapman-u3bne/
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=400&fit=crop",
        tags: ["LLM", "RAG", "AI", "Content Validation"],
    },
    {
        id: "french-language-learning-app",
        title: "Building a ChatGPT Applet for French Language Learning",
        date: "Nov 2023",
        excerpt:
            "Developing an interactive ChatGPT-based applet for French language learning with configurable scenarios and anti-drift safeguards.",
        content: `
# Building a ChatGPT Applet for French Language Learning

## Introduction

Today I have delved into building a ChatGPT-based applet designed to assist users in learning French. This offers configurable scenarios and language level settings but also incorporates measures to prevent topic drift, ensuring a focused learning experience.

## Concept and Design

The idea was born out of the need for a more interactive and personalized approach to language learning. Recognizing the capabilities of ChatGPT in understanding and generating natural language, I saw an opportunity to build a tool that could adapt to various learning stages and preferences.

## Front-End Development

The front end of the applet was developed using HTML, CSS, and JavaScript. This provided a user-friendly interface where learners could select their French language proficiency level (e.g., beginner, intermediate, advanced) and choose from different scenarios (like shopping, dining, or conversational practice). The design was kept simple yet intuitive, ensuring easy navigation and a pleasant user experience.

## Back-End Development

For the back end, I chose to develop a Flask API in Python. Flask's lightweight and scalable nature made it an ideal choice for this project. The API interacts with the ChatGPT model, processing user inputs and generating appropriate responses in French based on the selected proficiency level and scenario.

## Implementing Safeguards Against Topic Drift

One of the key challenges in language learning chatbots is maintaining relevance to the learning objectives. To address this, I implemented algorithms to detect and correct topic drift. If the conversation veers off course, the system gently steers it back to the relevant French language learning context.

## Unit Testing

Quality assurance is paramount. Hence, I implemented a range of unit tests to ensure each component of the applet functioned as intended. These tests covered various aspects, from front-end interactions to back-end logic and API responses, guaranteeing a smooth and effective learning experience.

## Walk Through

On beginning a session, the model is initiated with a prompt directing the conversation in the direction of the selected topic.

![Welcome screen](/posts/GPTScreengrabs/welcome_screen.png)

![Initialised model](/posts/GPTScreengrabs/intitalised_model.png)

The conversation then flows from there, with the model correcting language mistakes, and guiding the user in how to respond in fluent French.

![Having a conversation](/posts/GPTScreengrabs/having_a_conversation.png)

## Conclusion

This project was intended as a demonstration of the many ways in which ChatGPT and generative language models can be used to transform various industries. By leveraging ChatGPT's capabilities and integrating them into a tailored learning environment, I was able to create an applet that makes French language learning more accessible, engaging, and effective.

## Future Directions

Looking ahead, I plan to incorporate more advanced features, such as adaptive learning paths and real-time progress tracking. The goal is to continually enhance the applet, making it an indispensable tool for anyone looking to master the French language.
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1549737328-8b9f3252b927?w=800&h=400&fit=crop",
        tags: ["ChatGPT", "Language Learning", "Python", "Flask"],
    },
    {
        id: "trail-racing",
        title: "Trail Race Triumph!",
        date: "Nov 2023",
        excerpt:
            "Celebrating a 2nd place finish in my category at a recent trail race.",
        content: `
# Trail Race Triumph!

Exciting news from the trails - I just came 2nd in my category in a recent trail race! I regularly compete in both road and trail marathons, and have a passion for mountaineering. Every step in a marathon or a mountain climb pushes me further in my journey.

![Trail Race Victory](/posts/chelly_chase.jpg)

Thanks for all the support!

*Stay tuned for more adventures!*
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop",
        tags: ["Running", "Trail Racing", "Personal"],
    },
    {
        id: "election-forecasting",
        title: "Bayesian Analysis for Election Forecasting",
        date: "Nov 2023",
        excerpt:
            "Deploying a Hierarchical Bayesian model to forecast election results in a fictional country resembling the UK's first-past-the-post system.",
        content: `
# Bayesian Analysis for Election Forecasting: A Case Study from Dataland

My recent work involves deploying a Hierarchical Bayesian model to forecast election results in a fictional country, Dataland, which resembles the UK's first-past-the-post electoral system. Here is a high level overview of the methodological framework I developed, a deep dive on the details is provided in the [README](https://github.com/AEJaspan/ElectionForecasting) of the repo.

## Introduction

Dataland, a fictional representation with 12 provinces and a multi-party system, is where this Bayesian analysis was applied. The model uses PyMC for prediction, drawing from Abramowitz's "time for change" model and extending it to incorporate multi-party interactions and state-level nuances.

## Methodological Workflow

The Bayesian workflow was meticulously structured, starting with the calculation of state-specific partisan leans from historical vote share data. This was followed by integrating raw polling data and forecasting trends using a General Additive Model (GAM) applied to the polling predictions. The derived trend lines from this analysis can be seen below. Additionally, lagged economic indicators or "fundamentals" were processed to factor in the economic conditions influencing voter behavior.

![National predictions with win probabilities](/posts/Dataland/National_predictions_with_win_probs.png)

## Model Execution

The DatalandElectionModel.py script is the crux of the forecasting model, combining lagged economic indicators, polling data, and historical partisan leans to predict vote shares. The model was carefully tuned to the peculiarities of Dataland's political landscape, including inflation rates and GDP changes, to estimate the national vote share on election day.

![Time series](/posts/Dataland/time_series.png)

![Histograms](/posts/Dataland/histograms.png)

## Data Processing and Model Refinement

Data processing involved calculating the exponentially weighted sum of past partisan leans to create a current lean matrix. Additionally, the effect of pair-wise correlations across similarly inclined voting blocks was considered, as seen below. Polling trends were calculated using a weighted 7-day moving average, with pollster-specific weightings to mitigate bias. Time series forecasting was developed in a custom-built analysis package, and the model's predictive performance was gauged against economic indicators using Bayesian methods.

![Correlation matrix](/posts/Dataland/correlation_matrix.png)

## Results and Visualization

The Bayesian analysis culminated in state-specific win probabilities and national-level projections, which were then parsed through a simulated Electoral College system to determine the overall election winner. The averaged results of this process for the 2023 election are shown below.

![Simulation results map](/posts/Dataland/simulation_results_map.png)

The model's accuracy was demonstrated through various visualizations comparing predicted and actual results, underscoring the tool's robustness.

## Concluding Remarks

This project served as an interesting deep dive into both political science, as well as Bayesian inference, and was a useful sandpit for developing new ideas in both of these spaces.

**Repository:** https://github.com/AEJaspan/ElectionForecasting
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=400&fit=crop",
        tags: ["Bayesian", "Python", "PyMC", "Forecasting"],
    },
    {
        id: "poll-scraper",
        title: "Building a Robust Data Scraper",
        date: "Oct 2023",
        excerpt:
            "Demonstrating production-quality code with a political polling data scraper featuring comprehensive testing and CI/CD pipelines.",
        content: `
# Building a Robust Data Scraper

In the data-driven world of political analysis, having access to the latest polling data is crucial. My latest project was born out of a desire to tinker with web scraping while embracing industry-standard tooling. This wasn't just an isolated exercise but a precursor to a series of ambitious projects I have envisioned in the political polling arena.

## Production Quality Code

A primary goal of this project is to demonstrate what production-quality code should look like. This meant writing clean, maintainable, and efficient code that could be scaled and improved over time. My experience as a data scientist has led me to appreciate a rigorous approach to coding, focusing on a clear delineation of function, a highly modular development style and well documented code base.

## Testing

To ensure that the tool continues working under any future scenarios, I developed an extensive testing suite. This suite covered everything from unit tests that validated individual components to integration tests that ensured the scraper and the endpoint communicated correctly. Testing is often undervalued, but it is the cornerstone of reliable code. The tests were automated, running on various datasets to simulate real-world conditions.

## Continuous Integration and Deployment

The modern software lifecycle is incomplete without Continuous Integration (CI) and Continuous Deployment (CD). For this project, I utilized GitHub pipelines to automate the workflow. Each commit triggered a series of actions, from running tests to deploying the code to the production environment. This CI/CD pipeline ensured that any updates or fixes were swiftly and safely implemented, minimizing downtime and maintaining the tool's integrity.

## Documentation

Comprehensive documentation is the hallmark of any serious software tool. With this in mind, I meticulously documented the entire process on ReadTheDocs, ensuring that anyone from a future collaborator to an enthusiastic learner could understand and utilize the tool effectively. This documentation covers everything from setup to troubleshooting, providing a clear roadmap for the tool's usage.

## A Peek into the Repository

The GitHub repository serves as the central hub for the tool. It's where you can find the source code, the testing suite, and the pipeline configurations. Each piece of the code is commented and organized for ease of navigation. Feel free to dive into the repository and explore the inner workings of the scraper:

- **Source Code:** [GitHub Repo](https://github.com/AEJaspan/PollScraper)
- **Testing Suite:** [GitHub Repo - Tests](https://github.com/AEJaspan/PollScraper/tree/master/tests)
- **Pipeline Configurations:** [GitHub Repo - CI/CD Pipeline](https://github.com/AEJaspan/PollScraper/actions)

## ReadTheDocs

For a more structured and detailed guide, the ReadTheDocs documentation is your go-to resource. It offers step-by-step instructions, best practices, and troubleshooting tips:

- **Full Documentation:** [ReadTheDocs Documentation](https://pollscraper.readthedocs.io/en/latest/index.html)

## Conclusion

Sometimes the best way to develop a skill set, and to demonstrate the utility of current industry standard tooling is to play around with a toy problem in a sandbox environment, and to see what you can learn from this. I've had a lot of fun in doing so, and I hope you have enjoyed reading about this process!

Whether you're a fellow data scientist, a political analyst, or simply a curious mind, I invite you to explore the repository, peruse the documentation, and perhaps, suggest improvements to the project.
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
        tags: ["Python", "Web Scraping", "CI/CD", "Testing"],
    },
    {
        id: "bayesian-structural-health-monitoring",
        title: "Applied Bayesian Structural Health Monitoring",
        date: "Aug 2023",
        excerpt:
            "A white paper on applying Bayesian Inference for time series forecasting in geotechnical site monitoring, presented at GAMM 2023.",
        content: `
# Applied Bayesian Structural Health Monitoring: Inclinometer Data Anomaly Detection and Forecasting

### Introduction to Advanced Structural Health Monitoring

My latest white paper, delivered at the GAMM 2023 conference, documents the methodologies I developed on behalf of DYWIDAG into the application of Bayesian Inference for time series forecasting. This paper marks significant progress in geotechnical site monitoring. This research stands out in its novel use of Bayesian methods for analyzing inclinometer data, which are crucial in monitoring the stability of earthworks and infrastructure.

### Challenges in Inclinometer Data Analysis

Inclinometers play a pivotal role in assessing earthwork slopes and infrastructure stability. However, interpreting their data is challenging, as they are subject to complex physical phenomena and systematic errors. My research aims to tackle two main topics: providing an early warning system via time series forecasting, and developing a site-specific risk evaluation.

### Understanding the Data

In this analysis, my first instinct was to improve on the traditional style of visualising the inclinometer data. Typically, static, two-dimensional plots were used to this end (see below).

![Old 2D Plot](/posts/Inclo/traditional_inclo.png)

However, using Plotly, I developed interactive plots which provided a more intuitive understanding of the data, and uncovered flaws in traditional analysis methods, where 2-dimensional thresholds were typically applied to a three-dimensional data source.

![New 2D Plot](/posts/Inclo/IMG_0471.jpg)

![New 3D Plot](/posts/Inclo/IMG_0472.jpg)

### Applying Uncertainty Quantification in Bayesian Framework

The urgency for efficient SHM is escalating due to aging civil infrastructure, exacerbated by climate change and population growth. Traditional SHM methods are prone to human error and incur high maintenance costs. My study introduces a statistical and probabilistic approach using Uncertainty Quantification (UQ) within a Bayesian framework, automating inclinometer data interpretation and conserving resources.

### Utilizing Kalman Filtering and RTS Smoother

A key part of this study is employing Kalman Filtering to model inclinometer data as a Hidden Markov Model. This method, combined with an RTS smoother, adeptly manages real-world data challenges such as irregular time intervals and outliers. The practical effectiveness of this approach is validated through extensive real-world data sets, demonstrating its superiority in inclinometer data processing and SHM.

### Conclusion

This paper provides a novel approach to inclinometer data analysis, offering a more efficient, accurate, and automated method for infrastructure monitoring, crucial for timely maintenance and risk management.

**Paper:** https://arxiv.org/abs/2307.00305
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop",
        tags: ["Bayesian", "Time Series", "Infrastructure", "Research"],
    },
    {
        id: "leptoquark-search-third-generation",
        title: "Search for Leptoquarks Decaying into Third-Generation Quarks",
        date: "Jun 2023",
        excerpt:
            "Extending leptoquark searches to third-generation quarks using ATLAS detector data from the Large Hadron Collider.",
        content: `
# Search for Pair-Produced Scalar and Vector Leptoquarks Decaying into Third-Generation Quarks

This paper follows on from my [previous post](/articles/leptoquark-search-mixed-generation) on Leptoquark searches with the ATLAS detector. For an introduction to the topic, feel free to refer back to that post.

## Why Leptoquarks Matter

Leptoquarks are intriguing because they could explain observed discrepancies in the behavior of leptons (like muons) that current models cannot. The study is particularly focused on LQs that might interact with quarks and leptons from different generations, extending the phase space of this search to the 3rd generation of quarks. This area has recently garnered interest due to its potential to explain certain highly impactful experimental observations.

## Research Methodology

This research utilized data from the Large Hadron Collider (LHC) Run 2, which included proton-proton collisions between 2015 and 2018. The analysis strategy centered around a final-state signature consisting of one lepton, high missing transverse momentum, and at least four jets. This signature was indicative of a hadronically decaying top-quark, a key component in identifying LQs.

## Monte Carlo Simulations

To model the signal and background processes, Monte Carlo simulated event samples were used. These simulations incorporated various aspects of particle physics, like quantum chromodynamics and parton distribution functions, to accurately represent the expected results and compare them with the observed data.

## Significance

This paper is a significant contribution to particle physics, as it advances the search for leptoquarks, which could potentially reshape our understanding of fundamental particles and forces. It's an exciting read for anyone interested in the frontiers of physics and the ongoing quest to understand the building blocks of our universe.

**Paper:** https://link.springer.com/article/10.1007/JHEP06(2023)188
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
        tags: ["Particle Physics", "ATLAS", "LHC", "Research"],
    },
    {
        id: "robotic-bridge-inspection",
        title: "Robotic Inspection Project: Computer Vision for Bridge Cable Analysis",
        date: "Sep 2022",
        excerpt:
            "Developing software for robotic bridge inspection using computer vision to analyze cable defects on stay-cable bridges.",
        content: `
# Robotic Inspection Project

This project represents a significant advancement in bridge inspection, utilizing robotics and computer vision to analyze cable defects on stay-cable bridges. Initially, the challenge was to make the images captured by an inspection robot both useful and usable.

## The Challenge

A drone-based solution was initially considered but found unsuitable due to the precision required in analyzing cable defects. As an alternative, a robotic system was developed. This system featured a ring of cameras, each capturing images along the cable. I then developed a method of stitching these images together to form a cohesive view of the cable's condition.

## Key Functionalities

My focus in this project was the software development. I successfully implemented several key functionalities:

1. **Distortion Correction:** Before stitching, the images were corrected for any distortions
2. **Automated Stitching:** The software stitched image tiles around and along the cable
3. **Defect Detection:** Computer vision was employed to automatically detect cable defects
4. **Interactive User Interface:** A user interface was developed using React, running locally via Electron. This interface interacted with a backend Python server for image analysis, allowing users to view large composite images, identify detected defects, and add manual annotations
5. **High-Resolution Imaging:** The interface was capable of displaying very large images at deep zoom levels
6. **PDF Report Generation:** The system could automatically generate PDF reports from the images and annotations

## Computer Vision for Defect Detection

A core component of this project was the utilization of modern computer vision techniques to detect and localize defects on the cable surface. This utility of the product makes it possible for on-site engineers to quickly assess large quantities of image data, with their attention being effectively focused on sites with the most probable signs of damage.

![Object detection and localisation](/posts/automateddetection.png)

An early prototype of the cable viewer front end can be seen below. This displayed test images from a cable, facilitating user annotations. It's worth noting that this prototype used placeholder data from the Anzac Bridge for demonstration.

![Annotations provided in the frontend](/posts/annotations.png)

## Development Approach

The project's success hinged on adopting an agile approach, which enabled continuous development and integration of new features as additional data from the robot became available. This approach ensured the delivery of working software throughout the project's lifecycle.

## Conclusion

This project was a blend of research (for automated defect detection) and solid software engineering. Close engagement with the client ensured the final product was tailored to their requirements, successfully transforming a series of proofs-of-concept into a cohesive, functional product.
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1545193544-312983719627?w=800&h=400&fit=crop",
        tags: ["Computer Vision", "React", "Python", "Infrastructure"],
    },
    {
        id: "leptoquark-search-mixed-generation",
        title: "Search for Mixed Generation Leptoquarks with ATLAS",
        date: "Nov 2020",
        excerpt:
            "Investigating the potential existence of leptoquarks - theoretical particles bridging quarks and leptons - using LHC data.",
        content: `
# Search for Pairs of Scalar Leptoquarks Decaying into Quarks and Electrons or Muons

This paper investigates the potential existence of leptoquarks (LQs). These are theoretical new particles that could bridge the gap between quarks and leptons, and are predicted by certain extensions of the Standard Model of particle physics.

## Why Leptoquarks?

These particles are significant because they could explain several physical phenomena, such as:
- The origins of neutrino masses
- The matter/antimatter asymmetry in the universe
- Unification of electromagnetic and weak forces at high energies

## Production at the LHC

In the Large Hadron Collider (LHC), LQs could potentially be created through processes like gluon-gluon fusion and quark-antiquark annihilation. The paper focuses on examining the pair production of LQs, considering their possible decay into quarks and leptons across different generations, a scenario not extensively explored previously.

## Research Approach

Utilizing the complete Run 2 dataset from the LHC, this study undertakes a detailed search for LQs, requiring the presence of an oppositely charged electron or muon in the event selection. This approach builds on previous searches for LQ pairs, extending the understanding of these theoretical particles and their potential role in the subatomic world.

## Significance

The investigation contributes to the broader quest of understanding new physics and could potentially reshape our comprehension of fundamental particles and forces if LQs are found.

**Paper:** https://link.springer.com/article/10.1007/JHEP10(2020)112
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=400&fit=crop",
        tags: ["Particle Physics", "ATLAS", "LHC", "Research"],
    },
    {
        id: "montecarlo-top-physics",
        title: "Monte Carlo Simulation in Top Physics",
        date: "Nov 2019",
        excerpt:
            "Testing and validating the Matchbox framework in Herwig 7 for producing merged multi-leg top-antitop Monte Carlo samples at NLO accuracy.",
        content: `
# Implementation of Merged Multi-leg tt̄ Samples at NLO Accuracy Using Matchbox Framework in Herwig 7

This paper focuses on testing and validating the use of the Matchbox framework in [Herwig 7](https://herwig.hepforge.org/tutorials/index.html) for producing merged, multi-leg top-antitop (tt̄) Monte Carlo samples at next-to-leading order (NLO) accuracy.

## Purpose

This study is a preliminary investigation into the viability of using Herwig 7 for future bulk Monte Carlo sample production for ATLAS analysis.

## Key Aspects Discussed

- Speed of event generation
- Fraction of negative weights
- Accuracy of samples in modeling ATLAS data

## Findings

No significant improvements over the nominal samples were observed, particularly in modeling high transverse momentum (pT) regions.

## Contribution

This report contributes to the ongoing efforts to enhance the precision of particle physics simulations.

**Paper:** https://cds.cern.ch/record/2692863
    `,
        thumbnail:
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=400&fit=crop",
        tags: ["Particle Physics", "Monte Carlo", "ATLAS", "Simulation"],
    },
];

export const getArticleById = (id: string): Article | undefined => {
    return articles.find((article) => article.id === id);
};

export const searchArticles = (query: string): Article[] => {
    const lowerQuery = query.toLowerCase();
    return articles.filter(
        (article) =>
            article.title.toLowerCase().includes(lowerQuery) ||
            article.excerpt.toLowerCase().includes(lowerQuery) ||
            article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
    );
};
