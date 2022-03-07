FROM python:3.9

ENV PYTHONUNBUFFERED 1

# Set a Working Directory
WORKDIR /pyconkr-web-2022/

# Install Production Dependecies First
COPY requirements.txt /pyconkr-web-2022/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . /pyconkr-web-2022/

ARG PORT=8000
ENV PORT $PORT
EXPOSE $PORT 8001 8002

# CMD ["python", "manage.py", "runserver" "0.0.0.0:8000"]