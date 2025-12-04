FROM python

RUN mkdir gresy
RUN mkdir gresy/bin
WORKDIR gresy

COPY app.py .
COPY queries.py .

RUN pip3 install flask
RUN pip3 install psycopg2
RUN pip3 install sqlalchemy

CMD ["python", "-m", "flask", "run"]
